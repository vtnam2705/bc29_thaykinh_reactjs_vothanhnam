import React, { Component } from 'react'
import data from '../dataGlasses.json'

export default class ChangeGlass extends Component {
    renderButtonGlasses = () => {
        return data.map((object, idx) => {
            return (
                <div key={idx} className='col-4 mb-4'>
                    <button
                        className="border border-1 p-4 w-50 bg-secondary shadow rounded"
                        onClick={() => {
                            this.setState({
                                glassesUrl: `${object.url}`,
                                glassesName: `${object.name}`,
                                glassesDesc: `${object.desc}`,
                                glassesPrice: ` - ${object.price}$`
                            })
                        }}
                    >
                        <img src={object.url} alt="..." className="img-fluid" />
                    </button>
                </div>
            )
        })
    };

    // props created into constructor - method 1
    // Set default props component
    constructor(props) {
        super(props);
        this.state = {
            glassesUrl: `${data[0].url}`,
            glassesName: `${data[0].name}`,
            glassesPrice: `${data[0].price}`,
            glassesDesc: `${data[0].desc}`,
        }
    }

    // method 2
    // state = {
    //     glassesUrl: `${data[0].url}`,
    //     glassesName: `${data[0].name}`,
    //     glassesPrice: `${data[0].price}`,
    //     glassesDesc: `${data[0].desc}`,
    // }


    render() {
        const myStyle = {
            backgroundImage: `url('./glassesImage/background.jpg')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }

        return (
            <div className="wrapper w-full h-screen"
                style={myStyle}
            >
                <div
                    className="text-center p-10 text-white text-2xl font-bold"
                >
                    <p className='text-dark font-weight-bold fs-1'>TRY GLASSES APP ONLINE</p>
                </div>

                <div className="max-w-screen-lg mx-auto mt-10">
                    <div className='d-flex justify-content-around mb-3'>
                        <div className="card shadow" style={{ width: '18rem' }}>
                            <img
                                src="./glassesImage/model.jpg"
                                className="img-fluid"
                                alt="..."
                            />
                            <img
                                src="./glassesImage/v1.png"
                                className="w-50 opacity-75 position-absolute img-fluid"
                                style={{ top: "18%", left: "26%" }}
                                alt="..."
                            />
                            <div
                                className="absolute w-4/5 p-2 rounded bg-secondary"
                                style={{ bottom: "0px" }}
                            >
                                <p
                                    className="font-bold text-blue-500"
                                    style={{ fontSize: 20, fontWeight: 'bolder' }}>
                                    FENDI F8750
                                </p>
                                <p className='text-white'>
                                    Light pink square lenses define these sunglasses, ending
                                    with amother of pearl effect tip.
                                </p>
                            </div>
                        </div>

                        <div className="card shadow" style={{ width: '18rem' }}>
                            <img
                                src="./glassesImage/model.jpg"
                                className="img-fluid"
                                alt="..."
                            />
                            <img
                                src={this.state.glassesUrl}
                                className="w-50 opacity-75 position-absolute img-fluid"
                                style={{ top: "18%", left: "26%" }}
                                alt="..."
                            />
                            <div
                                className="absolute w-4/5 p-2 rounded bg-secondary"
                                style={{ bottom: "0px" }}
                            >
                                <p
                                    className="fw-bolder fs-1"
                                    style={{ fontSize: 20, fontWeight: 'bolder' }}>
                                    {this.state.glassesName}
                                    {this.state.glassesPrice}
                                </p>
                                <p className='text-white'>
                                    {this.state.glassesDesc}
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="d-flex flex-wrap gap">
                        {this.renderButtonGlasses()}
                    </div>
                </div>
            </div>
        )
    }
}
