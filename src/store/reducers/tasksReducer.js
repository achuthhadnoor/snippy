export const tasks = [
  {
    id: "12csdsd",
    task: "Connect your apps from workflow to save tasks into Snippy ",
    notes:
      "Connect the Apps to have them in one place using our chrome extension or desktop app",
    completed: false,
    repeat: {
      isRepeated: false,
      mode: "Daily", //Weekly,
      alternate: false,
      dates: {
        from: "25-11-2020",
        to: "28-11-2020"
      },
      remind: false
    },
    members: [
      {
        email: "achuth.hadnoor123@gmail.com",
        displayName: "Achuth"
      }
    ]
  },
  {
    id: "12csdsd",
    task:
      "Opensourcing WISYWYG editor that is customizable ( https://www.notion.so/achuth/Tasked-5da8c5f72efe454aas... )",
    notes: "assdkvlnsdjvnkdjfvnjdsf",
    completed: false,
    repeat: {
      isRepeated: false,
      mode: "Daily", //Weekly,
      alternate: false,
      dates: {
        from: "25-11-2020",
        to: "28-11-2020"
      },
      remind: false
    },
    members: [
      {
        email: "achuth.hadnoor123@gmail.com",
        displayName: "Achuth"
      }
    ]
  },
  {
    id: "lsaknd",
    task:
      "Shopping cart modal component design  ( https://www.figma.com/file/93hBZ7coheTXKlv2JpWM49/UIUXDX?node-i... )",
    notes: "vola! you found me ",
    completed: false,
    repeat: {
      isRepeated: false,
      mode: "Weekly", //Weekly,
      alternate: true,
      dates: {
        from: "25-11-2020",
        to: "28-11-2020"
      },
      remind: false
    },
    members: [
      {
        email: "achuth.hadnoor123@gmail.com",
        displayName: "Achuth"
      }
    ]
  },
  {
    id: "jknsadf",
    task: "Submit the component design Tomorrow at 10:00 am by @achuth.hadnoor",
    notes: "assdok ok man",
    completed: false,
    repeat: {
      isRepeated: false,
      mode: "Daily", //Weekly,
      alternate: true,
      dates: {
        from: "25-11-2020",
        to: "28-11-2020"
      },
      remind: true
    },
    members: [
      {
        email: "achuth.hadnoor123@gmail.com",
        displayName: "Achuth"
      }
    ]
  }
];

const taskReducer = (state = tasks,action)=>{
    let {type,payload} = action;
    switch (type) {
        case 'ADD_TASK':  
        return{
                ...state,
                tasks : [...state.tasks,payload],
            }
        case 'TASK_ERROR' :  
            return{
                ...state,
                error:payload
            }
            case 'GET_TASKS': 
            return{
                ...state,
                tasks:[...payload]
            }
        default:
            return state;
    }
}
export default taskReducer;