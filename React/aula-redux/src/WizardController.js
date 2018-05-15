import React, { Component } from 'react';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

class WizardController extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
        {page === 1 && <FirstStep showButton={true} onSubmit={this.nextPage} />}
        {page === 2 &&
          <SecondStep
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
            showButton={true}
          />}
        {page === 3 &&
          <ThirdStep
            previousPage={this.previousPage}
            review={this.nextPage}
            showButton={true}
          />
        }
        {page === 4 && 
        <div>
          <FirstStep showButton={false}/>
          <SecondStep showButton={false} />
          <ThirdStep showButton={false}  onSubmit={onSubmit} />
          </div>
        }
      </div>
    );
  }
}

export default WizardController;
