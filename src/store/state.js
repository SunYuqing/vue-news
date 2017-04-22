/**
 * Created by luowendi on 2017/4/16.
 */
export default {
  currentThemeId:-1,  //当前主题id
  isFirstLoad:true,   //第一次进入主页
  stories:[],          //当前新闻数组
  ids:[],              //当前新闻数组id
  id:'',               //当前新闻id
  new:[],              //当前新闻详情页内容
  popularity:0,      //当前新闻点赞数
  isCollect:false,   //当前收藏状态
  isCollectIds:[],   //收藏新闻id数组
  isCollectNews:[],  //收藏新闻数组
  comments:0,         //当前新闻评论总数
  long_comments:'', //当前新闻长评数
  short_comments:'' //当前新闻短评数
}
