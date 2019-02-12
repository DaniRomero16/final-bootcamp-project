import React, { PureComponent } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';
import './graphic.css';
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBModalFooter,
  MDBModalHeader,
  MDBModal,
  MDBModalBody,
  MDBContainer,
} from 'mdbreact';
export class Graphic extends PureComponent {
  state = {
    modal: false,
    modal2: false,
    value: '',
    dataLine: {
      labels: this.props.graphic.items.map(i => moment(i.date).format('MMM DD')),
      datasets: [
        {
          label: 'My Progress',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.graphic.items.map(i => i.value),
        },
      ],
    },
  };
  handleRemove = () => {
    this.props.remove(this.props.graphic.graphic_id);
    this.setState({
      modal: !this.state.modal,
    });
  };
  handleRemoveItem = item => {
    this.props.removeItem(item);
  };

  handleNewItem = () => {
    this.props.newItem({
      value: this.state.value,
      graphic_id: this.props.graphic.graphic_id,
    });
    this.setState({
      modal2: !this.state.modal2,
      value: '',
    });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  toggle2 = () => {
    this.setState({
      modal2: !this.state.modal2,
    });
  };
  handleChange = input => e => {
    const value = e.target.value;
    this.setState({ [input]: value });
  };
  render() {
    console.log(this.props);
    return (
      <MDBRow className="my-5 mx-4">
        <MDBCol size="12" className="z-depth-2 p-5 white-text">
          <MDBRow>
            <MDBCol sm="12" className="justify-content-center">
              <p className="h3-responsive text-center">
                {this.props.graphic.name}
                <MDBBtn flat className="text-right ml-4 z-depth-1" onClick={this.toggle}>
                  <MDBIcon icon="trash-alt" className="" />
                </MDBBtn>
              </p>
            </MDBCol>
          </MDBRow>
          <hr className="my-3" />
          <MDBRow>
            <MDBContainer>
              <Line data={this.state.dataLine} options={{ responsive: true }} />
            </MDBContainer>
          </MDBRow>

          <MDBModal isOpen={this.state.modal} toggle={this.toggle} position="bottom">
            <MDBModalHeader className="black-text" toggle={this.toggle}>
              Confirm deleting this graphic
            </MDBModalHeader>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle}>
                Cancel
              </MDBBtn>
              <MDBBtn className="btn btn-outline-red" onClick={this.handleRemove}>
                Confirm
                <MDBIcon icon="times" className="ml-2" />
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>

          {/* Adding item Modal */}
          <MDBModal isOpen={this.state.modal2} toggle={this.toggle2} position="left">
            <MDBModalHeader className="black-text" toggle={this.toggle2}>
              Fill the New Item info:
            </MDBModalHeader>
            <MDBModalBody className="black-text">
              <MDBContainer>
                <MDBRow>
                  <MDBCol md="12">
                    <form>
                      <label htmlFor="value" className="grey-text font-weight-light">
                        Item Value
                      </label>
                      <input
                        value={this.state.value}
                        onChange={this.handleChange('value')}
                        type="text"
                        id="value"
                        className="form-control"
                      />
                      <br />
                      <div className="text-center py-4 mt-3" />
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle2}>
                Close
              </MDBBtn>
              <MDBBtn className="btn btn-outline-purple" onClick={this.handleNewItem}>
                Confirm
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBCol>
      </MDBRow>
    );
  }
}
