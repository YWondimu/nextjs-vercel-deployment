import { icons } from './icons';

initialCategories = {
    room:{
        label: "Room",
        icon: icons.room,
        description: "Rooms around the building. Includes classes, offices, libraries, etc.",
        subcategories: {
            library:{
                label: "Library",
                icon: icons.library,
                description:"",
            },
            office:{
                label: "Office",
                icon: icons.office,
                description:"Department offices, professor's offices.",
            },
            classroom:{
                label: "Classroom",
                icon: icons.classroom,
                description:"",
            },
            lounge:{
                label: "Student Lounges",
                icon: icons.lounge,
                description:"",
            },
            other:{
                label: "Other",
                icon: icons.room,
                description:"Rooms that don't fall under one of the other categories.",
            },
        },
    },
    washroom:{
        label:"Washroom",
        icon: icons.washroom,
        description:"",
        subcategories:{
            genderNeutralWashroom:{
                label:"Gender Neutral Washroom",
                icon: icons.washroom,
                description:"",
            },
            womensWashroom:{
                label:"Womens Washroom",
                //TODO: change all instances of femaleWashroom to womensWashroom. same for maleWashroom.
                icon: icons.femaleWashroom,
                description:"",
            },
            mensWashroom:{
                label:"Mens Washroom",
                icon: icons.maleWashroom,
                description:"",
            }
        },
    },
    food:{
        label:"Food",
        icon: icons.foodAndDrink,
        description:"Places to get food and drink. E.g. stores, cafes, water fountains, vending machines.",
        subcategories:{
            //TODO: what is the difference between cafe and food store? no difference? delete which? cafe, i think?
            cafe:{
                label:"Cafe",
                icon: icons.cafe,
                description:"",
            },
            store:{
                label:"Food Store",
                icon: icons.foodStore,
                description:"",
            },
            cafeteria:{
                label:"Cafeteria",
                icon: icons.cafeteria,
                description:"",
            },
            vendingMachine:{
                label:"Vending Machine",
                icon: icons.vendingMachine,
                description:"",
            },
            waterFountain:{
                label:"Water Fountain",
                icon: icons.waterFountain,
                description:"",
            }
        },
    },
    transport:{
        label:"Transport",
        icon: icons.accessPoint,
        description:"Anything used for transportation. E.g. stairs, elevators, exits.",
        subcategories:{
            stair:{
                label:"Stairs",
                icon: icons.stair,
                description:"",
            },
            elevator:{
                label:"Elevator",
                icon: icons.elevator,
                description:"",
            },
            entranceAndExit:{
                label:"Entrance/Exit",
                icon: icons.entranceAndExit,
                description:"",
            },
        },
    },
    seating:{
        label:"Seating",
        icon: icons.seating,
        description:"Seating areas outside of classrooms. E.g. benches.",
        subcategories:{
        },
    }
};

export default initialCategories;
