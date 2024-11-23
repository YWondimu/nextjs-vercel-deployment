import { useState } from 'react';

function useModel() {

    //features
    //types and subtypes
    //floors
    //wings?
    //adminIsLoggedIn
    //icons

    //viewModel
    //zoom level
    //pan level
    //icons?
    //types of shapes and colors


    //feature template
    //{
    //    id:,
    //    type:,
    //    subtype:,
    //    position: {x:,y:},
    //    floorNumber:,
    //    isSelected:,
    //    isVisible:,
    //}
    const [features, setFeatures] = useState([
    ]);
    function areEqual(obj1, obj2) {
        return (
            (obj1.id === obj2.id) &&
            (obj1.type === obj2.type) &&
            (obj1.subtype === obj2.subtype) &&
            (obj1.position === obj2.position) &&
            (obj1.floorNumber === obj2.floorNumber)
        );
    }
    function featureExists(obj1) {
        exists = features.some(obj1 => areEqual(obj1,obj2));
        return exists;
    }
    function addFeature(newFeature) {
    }
    function updateFeature(updatedFeature) {
    }
    function removeFeature(featureId) {
    }
    function getFeatures() {
    }

    //floor
    //{
    //  name:
    //  description:?
    //  imageUrl:
    //  leevl:
    //}
    const folder = '/unb-floors-with-shadow/'
    const [floors, setFloors] = useState([
        {
            name: "A",
            imageUrl: folder + 'floor-a',
            level: -2,
        },
        {
            name: "B",
            imageUrl: folder + 'floor-b',
            level: -1,
        },
        {
            name: "C",
            imageUrl: folder + 'floor-c',
            level: 1,
        },
        {
            name: "D",
            imageUrl: folder + 'floor-d',
            level: 2,
        },
        {
            name: "E",
            imageUrl: folder + 'floor-e',
            level: 3,
        },
        {
            name: "F",
            imageUrl: folder + 'floor-f',
            level: 4,
        },
    ]);
    function sortFloors(direction) {
        factor = 1;
        if (direction === 'asc') factor = 1;
        if (direction === 'desc') factor = -1;

        floors.sort( (floor1, floor2) => {
            difference = floor1.level - floor2.level;
            return difference*factor;
        });
    }
    function addFloor(floor) {
    }
    function updateFloor() {
    }
    function removeFloor() {
    }
    function getFloors() {
    }

    return {
        addFeature,
        updateFeature,
        removeFeature,
        getFloors,
    }
}

export default useModel;
