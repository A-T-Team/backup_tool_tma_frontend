import {Form, Modal} from 'react-bootstrap';
import styled from 'styled-components';
export const DarkModal = styled(Modal)`
  .modal-content {
    background-color: #1E2939;
    color: #FFFFFF;
  }

  .modal-header {
    border-bottom: none;
  }

  .modal-body {
    //border-bottom: 1px solid #3A3A3A;
  }

  .form-control {
    background-color: #18202C;
    color: #FFFFFF;
    border-color: #2A3A50;
  }

  .form-control:focus {
    background-color: #1b242f;
    color: #FFFFFF;
    border-color: #3A3A3A;
    box-shadow: none;
  }

  .modal-footer {
    border-top: none;
  }

  .btn-primary {
    background-color: #007BFF;
    border-color: #007BFF;
  }

  .btn-primary:hover {
    background-color: #0069D9;
    border-color: #0069D9;
  }
`;
