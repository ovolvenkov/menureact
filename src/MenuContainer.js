import React, { Component } from "react"
import MenuButton from "./MenuButton";
import Menu from "./Menu";


class MenuContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }

        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
    }

    handleMouseDown(e) {
        this.toggleMenu();
        console.log(this.state.visible);
        e.stopPropagation();
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        return (
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown}/>
                <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
                <div>
                    <p>Choise item</p>
                    <ul>       
                        <li>Lorem</li>
                        <li>Lorem</li>
                        <li>Lorem</li>
                        <li>Lorem</li>
                        <li>Lorem</li>
                        <li>Loremp</li>
                        <li>Lorem</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MenuContainer;