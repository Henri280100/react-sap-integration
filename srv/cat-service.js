module.exports = cds.service.impl(async function (srv) {
  const { Books } = srv.entities;

  srv.before("CREATE", "Books", async (req) => {
    if (!req.data.ID) {
      req.data.ID = require("uuid").v4(); // Generate a UUID for the new book
    }
  });

  srv.on("READ", "Books", async (req) => {
    // You can add custom logic here if needed, e.g., filtering or modifying the result
    req.query.orderBy("title"); // Example: order books by title
    return srv.run(req.query);
  });
});
