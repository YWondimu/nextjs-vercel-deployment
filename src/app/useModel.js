import { useState } from 'react';
import { initialCategories } from './initialCategories';
import { initialFloors } from './initialFloors';

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
    //    label:,
    //    type:,
    //    subtype:,
    //    position: {x:,y:},
    //    floorNumber:,
    //    isAccessible:,
    //    isSelected:,
    //    isVisible:,
    //}
    const [features, setFeatures] = useState([
    ]);
    function areEquivalent(obj1, obj2) {
        return (
            (obj1.label === obj2.label) &&
            (obj1.type === obj2.type) &&
            (obj1.subtype === obj2.subtype) &&
            (obj1.position === obj2.position) &&
            (obj1.floorNumber === obj2.floorNumber)
            (obj1.isAccessible === obj2.isAccessible)
        );
    }
    function equivalentFeatureExists(obj1) {
        exists = features.some(obj1 => areEquivalent(obj1,obj2));
        return exists;
    }
    function addFeature(newFeature) {
    }
    function updateFeature(updatedFeature) {
        id = updatedFeature.id;
    }
    function removeFeature(featureId) {
    }
    function getFeatures() {
    }

    const [categories, setCategories] = useState(initialCategories);

    const folder = '/unb-floors-with-shadow/'
    const [floors, setFloors] = useState(initialFloors);
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
