var express = require('express');
var router = express.Router();
var signController = require('./../controllers/sign.js')


/* GET home page. */
/*首页*/
router.get('/', signController.showIndex);
/* 新手入门 页面 */
router.get('/newsign', function(req, res, next) {
  res.render('newsign', {  });
});
/*API 页面*/
router.get('/api', function(req, res, next) {
  res.render('api', {  });
});
/*关于我们 页面*/
router.get('/about', function(req, res, next) {
  res.render('about', {  });
});
/* 注册 页面 */
router.get('/sign', signController.showSignup);
/* 注册请求 */
router.post('/signin', signController.signup);
/* 登录 页面 */
router.get('/login', signController.showLoginin);
/* 登录 请求 */
router.post('/loginin', signController.loginin);
/* 退出 */
router.get('/loginout', signController.loginout);
/* 发表文章 页面 */
router.get('/messagePage',signController.messagePage)
/* 发表文章 请求 */
router.post('/messagePage/add',signController.addmessagePage)
/* 文章详情 页面 */
router.get('/messageDetail',signController.messageDetail)
/* 上传*/
router.post('/file/uploading' ,signController.fileupload);
/* 点赞 */
router.post('/thumbsUp', signController.thumbsUp)



module.exports = router;
