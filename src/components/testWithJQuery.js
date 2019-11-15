import React from "react";
import $ from "jquery";


class TestjQuery extends React.Component {
    componentDidMount() {
        this.$el = $(this.element);
        this.$el.html("Этот тест выведен с помощью jQuery");
    }

    render() {
        return (
            <>
            <h2>Внедрение jQuery</h2>
            <div className="test" ref={element => this.element = element} />
            </>
        )
    }
}

export default TestjQuery;