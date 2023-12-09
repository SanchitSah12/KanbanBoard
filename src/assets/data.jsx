import { AllOut, Cancel, CheckCircle, CircleOutlined, MoreVert, Opacity, SignalCellularAlt, SignalCellularAlt1Bar, SignalCellularAlt2Bar, Tonality, Warning } from "@mui/icons-material"

const names = {
    0: {name:"No Priority",icon:<MoreVert/>},
    4: {name:"Urgent",icon:<Warning style={{color:"orange"}}/>},
    3: {name:"High",icon:<SignalCellularAlt/>},
    2: {name:"Medium",icon:<SignalCellularAlt2Bar/>},
    1: {name:"Low",icon:<SignalCellularAlt1Bar/>},
  }


  const user = {
    "Backlog": {icon: <img height={25} style={{opacity:"60%"}} src="/circle-loading.png"/>, title: "Backlog"},
    "Todo": {icon: <CircleOutlined style={{color:"lightgray"}}/>, title: "Todo"},
    "In progress": {icon: <Tonality style={{color:"yellow"}}/>, title: "In Progress"},
    "Done": {icon: <CheckCircle style={{color:"blueviolet"}}/>, title: "Done"},
    "Cancelled": {icon: <Cancel  style={{color:"lightgray"}}/>, title: "Cancelled"}
  }
  export {names,user}