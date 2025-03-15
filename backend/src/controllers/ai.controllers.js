const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  const code = req.body.code;
  if (!code) {
    return res.status(400).send("Code Required");
  }
  const response = await aiService(code);
  return res.status(200).send(response);
};
