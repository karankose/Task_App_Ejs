import pool from "../DB/db-cinfig.js";
import Admin from "../model/admin.model.js";
export const signUpPage = (req, res,next) => {
  return res.render("signin");
};
export const signUp = (req, res) => {
  let { email, password } = req.body;
  let admin = new Admin(null ,email , password);
  admin.authenticate().then(result=>{
    return result.lenght !==0  ? res.render('deshBoard') : res.redirect("/admin/sign-up");
  }).catch(err=>{
    return res.render("error.ejs",)
  })
};
