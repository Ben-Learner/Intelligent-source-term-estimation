const { BrowserWindow,Menu,dialog} = require('electron')
const template = [
    {label:'软件使用说明',
    accelerator:'ctrl+u',
    click:() =>{
        var win = new BrowserWindow({
            width:500,
            height:500,
            webPreferences:{
                nodeIntegration:true
            }
        })
        win.loadFile('软件使用说明.html')
        win.on('close',() =>{
            win = null
        })
    }
},
    {label:'事故数据导入',
    accelerator:'ctrl+i',
    click:() =>{
        dialog.showOpenDialog({
            title:'选择事故数据',
            filters: [{name:'excel',extensions:['csv','xlsx']}],
            buttonLabel:'选择事故表'
        })
    }
},
    {label:'贝叶斯模型库',
    accelerator:'ctrl+m',
    submenu:[
        {label:'始发事件模型库',
        accelerator:'ctrl+ie',
        click:() =>{
            var win = new BrowserWindow({
                width:800,
                height:800,
                webPreferences:{
                    nodeIntegration:true
                }
            })
            win.loadFile('始发事件模型库.html')
            win.on('close',() =>{
                win = null
            })
        }
    },
        {label:'题头事件模型库',
        accelerator:'ctrl+he',
        click:() =>{
            var win = new BrowserWindow({
                width:800,
                height:800,
                webPreferences:{
                    nodeIntegration:true
                }
            })
            win.loadFile('题头事件模型库.html')
            win.on('close',() =>{
                win = null
            })
        }
    },
        {label:'新建模型',
        accelerator:'ctrl+nm',
        click:() =>{
            var win = new BrowserWindow({
                width:800,
                height:800,
                webPreferences:{
                    nodeIntegration:true
                }
            })
            win.loadFile('新建模型.html')
            win.on('close',() =>{
                win = null
            })
        }
}
    ]
},
    {label:'关于作者',
    accelerator:'ctrl+m',
    click:() =>{
        var win = new BrowserWindow({
            width:500,
            height:500,
            webPreferences:{
                nodeIntegration:true
            }
        })
        win.loadFile('关于作者.html')
        win.on('close',() =>{
            win = null
        })
    }
    }

]
var m = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(m)