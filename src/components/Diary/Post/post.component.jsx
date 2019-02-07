import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';

import './post.css';

export class Post extends Component {
  render() {
    return (
      <MDBRow className="my-5 mx-4">
        <MDBCol size="12" className="z-depth-2 p-5">
          <h3 className="h3-responsive">
            Post Title
            <MDBBtn size="sm" flat className="text-right">
              X
            </MDBBtn>
          </h3>
          <hr className="my-5" />
          <p className="text-justify">
            Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
            Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas
            ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium
            totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.
          </p>
        </MDBCol>
      </MDBRow>
    );
  }
}
