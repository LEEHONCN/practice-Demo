const navMenuData = [
  {
    'name': '产品功能',
    'menu': [{
      'menuName': '数据采集',
      'menuContent': ['埋点', '无埋点', '广告监测']
    },{
      'menuName': '数据分析',
      'menuContent': ['网站分析', 'App 分析', '小程序分析']
    },{
      'menuName': '运营平台',
      'menuContent': ['智能运营']
    }]
  },
  {
    'name': '解决方案',
    'menu': [{
        'menuName': '行业解决方案',
        'menuContent': ['电商行业', '在线旅游行业', '互联网金融行业', '企业服务行业']
      },{
        'menuName': '场景解决方案',
        'menuContent': ['搭建指标体系', '渠道流量监测', '提高流量转化', '提高用户留存', '精细化用于运营']
      }
    ]
  },
  {
    'name': '客户案例'
  },
  {
    'name': '资源中心',
    'menu': [{
      'menuName': '学习资源',
      'menuContent': ['博客', '电子书', '帮助文档']
    },{
      'menuName': '品牌活动',
      'menuContent': ['增长大会', '增长学院']
    }]
  },
  {
    'name': '关于我们',
    'menu': [{
      'menuName': '关于我们',
      'menuContent': ['了解我们', '新闻中心', '加入我们', '联系我们']
    }]
  }
];
const navMenuDataMap = {
  //产品功能
    //数据采集
  '埋点': 'https://www.growingio.com/features/event_track',
  '无埋点': 'https://www.growingio.com/features/auto_track',
  '广告监测': 'https://www.growingio.com/features/ad_track',
    //数据分析
  '网站分析': 'https://www.growingio.com/products/web',
  'App 分析': 'https://www.growingio.com/products/app',
  '小程序分析': 'https://www.growingio.com/products/miniprogram',
    //运营平台
  '智能运营': 'https://www.growingio.com/products/operation',

  //解决方案
    //行业解决方案
  '电商行业': 'https://www.growingio.com/solutions/e-commerce',
  '在线旅游行业': 'https://www.growingio.com/online-travel',
  '互联网金融行业': 'https://www.growingio.com/internet-finance',
  '企业服务行业': 'https://www.growingio.com/saas',
    //场景解决方案
  '搭建指标体系': 'https://www.growingio.com/solutions/metrics',
  '渠道流量监测': 'https://www.growingio.com/solutions/channel-monitor',
  '提高流量转化': 'https://www.growingio.com/solutions/conversion',
  '提高用户留存': 'https://www.growingio.com/solutions/retention',
  '精细化用于运营': 'https://www.growingio.com/solutions/operation',

  //客户案例
  '客户案例': 'https://www.growingio.com/case',

  //资源中心
    //学习资源
  '博客': 'https://blog.growingio.com',
  '电子书': 'https://www.growingio.com/ebook',
  '帮助文档': 'https://www.growingio.com/case',
    //品牌活动
  '增长大会': 'https://www.growingio.com/growth-conference',
  '增长学院': 'https://www.growingio.com/webinar',

  //关于我们
  '了解我们': 'https://www.growingio.com/about',
  '新闻中心': 'https://www.growingio.com/news',
  '加入我们': 'https://www.growingio.com/joinus',
  '联系我们': 'https://www.growingio.com/contact'
}

export { navMenuData, navMenuDataMap };
