//import '@/assets/js/esmap.min.js'
let log = require('./log.js')

export const init = (container, mapID, mapDataFolder,config) => {
    log.print("config:",config)
    if ("undefined" == typeof(config)) {
        config = {
            container: container,                                   //地图显示容器
            mapDataSrc: './static/mapinfos/' + mapDataFolder,                   //离线地图数据位置
            mapThemeSrc: './static/mapinfos/'+ mapDataFolder + '/theme',        //离线主题数据位置
            focusAlphaMode: true,               //对不可见图层启用透明设置 默认为true
            focusAnimateMode: true,             //开启聚焦层切换的动画显示
            focusAlpha: 0.5,                    //对不聚焦图层启用透明设置，当focusAlphaMode = true时有效
            viewModeAnimateMode: true,          //开启2维，3维切换的动画显示
            moveToAnimateMode: true,            //地图定位跳转动画设置
            defaultScaleLevel: 12,              //设置默认显示级别,1到24之间的整数
            modelSelectedEffect: true,          //支持单击模型高亮，false为单击时模型不高亮
            visibleFloors: "all",               //初始显示楼层
            focusFloor: 1,                      //初始聚焦楼层
            //themeID: '2001',                  //自定义样式主题ID
            token: 'escope',                    //打开地图对应的token
            viewMode: esmap.ESViewMode.MODE_3D 	//初始二维还是三维状态
        }
    }
    map = new esmap.ESMap(config)
    map.showCompass = true //添加指北针
    map.showScaler = true //添加比例尺
    map.openMapById(mapID)
    log.print(map,config)
    return map
}

//多层控件
export const addFloorControl = (map) => {
    let ctlOpt = new esmap.ESControlOptions({
        position: esmap.ESControlPositon.RIGHT_TOP,
        imgURL: 'static/mapinfos/shop/widgets/'
    })
    return new esmap.ESScrollFloorsControl(map, ctlOpt);
}
//多维控件
export const add2And3 = (map) => {
    let opt = new esmap.ESControlOptions({
        imgURL: 'static/mapinfos/shop/widgets/'
    })
    return new esmap.ESToolControl(map,opt)
}
