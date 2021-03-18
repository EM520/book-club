import express from "express";
import conn from "../db.js";
// console.log(conn, 'conn')
const router = express.Router();

router.get("/book-collection/user", async (request, response) => {
  // console.log(request.user.id, "userID");
  // const id = [req.user.id]
  const userGroups = await conn.raw(
    `
      SELECT * FROM books b
      INNER JOIN book_collections bc
      ON b.id = bc.book_id
      WHERE bc.user_id=?
        `,
    [request.user.id]
  );
  response.json(userGroups.rows);
});

router.delete("/book-collection/:bookId", async (req, res) => {
  const bookId = req.params.bookId;

  await conn.raw(
    `
    DELETE FROM book_collections bc
    WHERE bc.book_id=?
    `,
    [bookId]
  );
  res.json({ message: "Books Group deleted" });
});

export default router;