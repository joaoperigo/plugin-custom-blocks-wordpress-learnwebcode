wp.blocks.registerBlockType("ourplugin/are-you-paying-attention", {
    title: "Are You Paying Attention?",
    icon: "smiley",
    category: "common",
    attributes: {
        skyColor: {type: "string"},
        grassColor: {type: "string"},
    },
    edit: function (props) {
        function updateSkyColor(event) {
            props.setAttributes({skyColor: event.target.value})
        }

        function updateGrassColor(event) {
            props.setAttributes({grassColor: event.target.value})
        }

        return (
            <div>
                <input type="text" placeholder="sky color" value={props.attributes.skyColor} onChange={updateSkyColor} />
                <input type="text" placeholder="grass color" value={props.attributes.grassColor} onChange={updateGrassColor} />
            </div>
        )
    },
    save: function (props) {
        return (
            <div>
                <h4>Today sky is {props.attributes.skyColor} and the grass is {props.attributes.grassColor}.</h4>
            </div>
        )
    },
    deprecated: [
        {
            attributes: {
                skyColor: {type: "string"},
                grassColor: {type: "string"},
            },
            save: function (props) {
                return (
                    <div>
                        <h3>Today sky is {props.attributes.skyColor} and the grass is {props.attributes.grassColor}.</h3>
                    </div>
                )
            },
        },
        {
        attributes: {
            skyColor: {type: "string"},
            grassColor: {type: "string"},
        },
        save: function (props) {
            return (
                <div>
                    <h2>Today sky is {props.attributes.skyColor} and the grass is {props.attributes.grassColor}.</h2>
                </div>
            )
        },
    }]
}) 