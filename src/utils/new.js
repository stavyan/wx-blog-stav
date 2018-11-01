/**
 *@des 用户信息查询等操作
 *@author stav stavyan@qq.com
 *@blog https://stavtop.club
 *@date 2018/11/01 22:03:21
 *@param userData
 */
import Bmob from '../../static/bmob/Bmob-1.4.4.min'
var userData = wx.getStorageSync('userData')
/**
 * 推送消息通知
 * @param action
 * @param content
 * @param user
 * @param id
 * @returns {Promise.<T>}
 */
export function sendNew (action, content, user, id) {
  const query = Bmob.Query('news')
  var pointer1 = Bmob.Pointer('_User')
  let poiID1 = null
  if (action === 'own') {
    poiID1 = pointer1.set('772352c876')
  } else {
    poiID1 = pointer1.set(user)
  }
  var pointer2 = Bmob.Pointer('articles')
  var poiID2 = pointer2.set(id)
  query.set('user', poiID1)
  query.set('content', content)
  query.set('article', poiID2)
  query.set('status', 'false')
  return query.save().then(res => {
    return Promise.resolve(true)
  }).catch(() => {
    return Promise.resolve(false)
  })
}

/**
 * 查询我的消息列表
 * @returns {Promise.<T>}
 */
export function getNewsList () {
  console.log(userData.objectId)
  const query = Bmob.Query('news')
  query.equalTo('user', '==', userData.objectId)
  query.equalTo('status', '==', 'false')
  query.order('-createdAt')
  return query.find().then(res => {
    return Promise.resolve(res)
  }).catch(err => {
    console.log(err)
  })
}

/**
 * 修改信息的阅读状态
 * @param id
 * @returns {Promise.<T>}
 */
export function changeStatus (id) {
  const query = Bmob.Query('news')
  return query.get(id).then(res => {
    res.set('status', 'true')
    res.save()
    return Promise.resolve(res)
  }).catch(err => {
    console.log(err)
  })
  // query.set('objectId',id) //需要修改的objectId
  // query.set('status', 'true')
  // return query.save().then(res => {
  //     return Promise.resolve(res);
  // }).catch(err => {
  //     console.log(err)
  // })
}

/**
 * 查询未读信息
 * @returns {Promise.<T>}
 */
export function getNewsCount () {
  var userData = wx.getStorageSync('userData')
  console.log(userData.objectId)
  const query = Bmob.Query('news')
  query.equalTo('status', '==', 'false')
  query.equalTo('user', '==', userData.objectId)
  return query.count().then(res => {
    return Promise.resolve(res)
  }).catch(err => {
    console.log(err)
  })
}
