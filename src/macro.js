const path = require("path");
const fs = require("fs");

const { createMacro } = require("babel-plugin-macros");

export default createMacro(filesizeMacros);

function filesizeMacros({ references, state, babel }) {
  references.default.map(referencePath => {
    if (referencePath.parentPath.type === "CallExpression") {
      requirefilesize({ referencePath, state, babel });
    } else {
      throw new Error(
        `This is not supported: \`${referencePath
          .findParent(babel.types.isExpression)
          .getSource()}\`. Please see the filesize.macro documentation`,
      );
    }
  });
}

function requirefilesize({ referencePath, state, babel }) {
  const filename = state.file.opts.filename;
  const t = babel.types;
  const callExpressionPath = referencePath.parentPath;
  const dirname = path.dirname(filename);
  let filesizePath;

  try {
    filesizePath = callExpressionPath.get("arguments")[0].evaluate().value;
  } catch (err) {
    // swallow error, print better error below
  }

  if (filesizePath === undefined) {
    throw new Error(
      `There was a problem evaluating the value of the argument for the code: ${callExpressionPath.getSource()}. ` +
        `If the value is dynamic, please make sure that its value is statically deterministic.`,
    );
  }

  const fullPath = path.resolve(dirname, filesizePath);
  let fileContent;
  try {
    fileContent = fs.statSync(fullPath)["size"];
  } catch (err) {
    throw new Error(
      `There was a problem getting filesize for: ${filesizePath}. ` +
        `Unsupported image format`,
    );
  }

  referencePath.parentPath.replaceWith(
    t.expressionStatement(t.NumericLiteral(fileContent)),
  );
}
