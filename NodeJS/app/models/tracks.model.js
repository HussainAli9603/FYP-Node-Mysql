module.exports = (sequelize, Sequelize) => {
    const tracks = sequelize.define("tracks", {
        tracks_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        track_name: {
            type: Sequelize.STRING
        },
        track_description: {
            type: Sequelize.STRING
        },
        track_provider: {
            type: Sequelize.STRING
        },
        track_link: {
            type: Sequelize.STRING
        },
        track_lemons: {
            type: Sequelize.INTEGER
        },
        create_at: {
            type: Sequelize.DATE
        },
        modified_at: {
            type: Sequelize.DATE
        }

    }, { timestamps: false });

    return tracks;
}