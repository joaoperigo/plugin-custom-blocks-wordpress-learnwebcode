wp.blocks.registerBlockType("ourplugin/are-you-paying-attention", {
    title: "Are You Paying Attention?",
    icon: "smiley",
    category: "common",
    edit: function () {
        return (
            <div>
                <p>Hello</p>
                <h4>Hi</h4>
            </div>
        )
    },
    save: function () {
        return (
            <div>
                <p>Front</p>
                <h4>FRont</h4>
            </div>
        )
    }
}) 