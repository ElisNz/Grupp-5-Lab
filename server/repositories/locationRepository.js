const { Locations, db } = require('../models/model')
const {
    insertManyLocations,
    searchLocation,
    getAllLocations
} = require('../db_context.js')
const ObjectID = db.mongoose.Types.ObjectId

async function insertMockLocation() {
    const park = new ObjectID('646d2895bcbca72e55be7afd')
    const data = [
        {
            title: 'VITABERGSPARKEN',
            category: park,
            description:
                'A beautiful perfect picnic park, with beautiful walking paths among tall trees and across the meadows. There is also a lot of inspiring architecture here, such as the eco-temple, the copper tents and yes, Haga Castle, of course.',
            coordinates: {
                latitude: 59.35666524,
                longitude: 18.0333332
            }
        },
        {
            title: 'IVAR LOS PARK',
            category: park,
            description:
                'Picnic with a view! Ivar Los Park is located on Södermalm with a beautiful view of Stockholm. Here you sit on grass and most of the park is on a slope.',
            coordinates: {
                latitude: 51.1234,
                longitude: 0.5678
            }
        },
        {
            title: 'SKINNARVIKSBERGET',
            category: park,
            description:
                'Skinnarviksberget is located with beautiful view of Stockholm. The view from here is unbeatable - you can see all over Stockholm and beyond. Offers plenty of seating on the mountain. Recommended afternoon and evening.',
            coordinates: {
                latitude: '59.334591',
                longitude: 18.06324
            }
        },
        {
            title: 'TANTOLUNDEN',
            category: park,
            description:
                'A beautiful large park in Hornstull. The park offers picnic facilities in large parts of the park, ',
            coordinates: {
                latitude: 59.334591,
                longitude: 18.06324
            }
        },
        {
            title: 'ROLAMBSHOVSPARKEN',
            category: park,
            description:
                "In the middle of central Stockholm on Kungsholmen, you will find Rålambshovsparken, which is one of Stockholm's most popular parks during the summer. With its fantastic view of Riddarfjärden",
            coordinates: {
                latitude: 59.323998704,
                longitude: 18.02083325
            }
        }
    ]
    return await insertManyLocations(data)
}
async function getAll() {
    return getAllLocations()
}
// update functionalty
async function updateMockLocation(locationId, updatedData) {
    try {
        return await Locations.findByIdAndUpdate(locationId, updatedData, {
            new: true
        })
    } catch (error) {
        console.error('Error updating location:', error)
        throw error
    }
}

module.exports = {
    insertMockLocation,
    getAll,
    updateMockLocation
}
