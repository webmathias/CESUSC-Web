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
        {page === 1 && <FirstStep onSubmit={this.nextPage} />}
        {page === 2 &&
          <SecondStep
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />}
        {page === 3 &&
          <ThirdStep
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />}
          {page > 4 && 
          <FinishStep
          previousPage={this.previousPage}
          onSubmit={onSubmit} />
          }
      </div>
    );
  }
}

export default WizardController;
