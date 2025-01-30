import pool from "../DB/db-cinfig.js";

export const signUpPage = (req, res) => {
  return res.render("signin.ejs");
};
export const signUp = (req, res) => {
  let { email, password } = req.body;
  pool.getConnection((err, con) => {
    if (!err) {
      let sql = "select * from admin where email = ? and password = ? ";
      con.query(sql, [email, password], (err, result) => {
        con.release();
        if (!err) {
          if (result.length != 0) {
            console.log("login success");
          }
        }else{
            console.log(err);     
        }
      });
    } else {
      console.log(err);
    }
  });
};
