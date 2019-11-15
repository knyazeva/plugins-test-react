import React from "react";


class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src="/images/cat.png" style={{ position: 'absolute', left: mouse.x + 15, top: mouse.y + 15 }} />
        );
    }
}

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.pageX,
            y: event.pageY
        });
    }

    render() {
        return (
            <div style={{ height: '300px', background: 'gray' }} onMouseMove={this.handleMouseMove}>

                {/*
                 Вместо статического представления того, что рендерит <Mouse>,
                 используем рендер-проп для динамического определения, что надо отрендерить.
                 */}
                {this.props.render(this.state)}
            </div>
        );
    }
}

class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <h1>Перемещайте курсор мыши!</h1>
                {/* mouse - это то, что рендерит компонент Mouse, а он рендерит координаты x и y. */}
                {/* Далее эти координаты передаются в компонент Cat */}
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )}/>
            </div>
        );
    }
}

export default MouseTracker;