const nodemailer = require('nodemailer')

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.163.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'guodadablog@163.com', // generated ethereal user
    pass: '123456XXX' // generated ethereal password 授权码 而非 密码
  }
})

/**
 * 
 * @param {Object} params 
 * @param {Email} params.receiver - 邮箱地址
 * @param {String} params.content - 发送的内容
 */
const sendMail = async ({ receiver, content }) => {
  let info = await transporter.sendMail({
    from: 'guodadablog@163.com', // sender address
    to: receiver, // list of receivers
    subject: '郭大大的博客', // Subject line
    text: '您的评论获得新的回复！', // plain text body
    html: content // html body
  })

  console.log('Message sent: %s', info.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

module.exports = sendMail