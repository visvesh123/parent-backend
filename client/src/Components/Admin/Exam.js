import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import Upload from './Upload';
import { render } from 'react-dom';
import { Container } from 'reactstrap';
import './Exam.css';

const Sem = [
  {
    key: '1',
    text: 'Sem-1',
    value: '1',
  },
  {
    key: '2',
    text: 'Sem-2',
    value: '2',
  },
  {
    key: '3',
    text: 'Sem-3',
    value: '3',
  },
  {
    key: '4',
    text: 'Sem-4',
    value: '4',
  },
  {
    key: '5',
    text: 'Sem-5',
    value: '5',
  },
  {
    key: '6',
    text: 'Sem-6',
    value: '6',
  },
  {
    key: '7',
    text: 'Sem-7',
    value: '7',
  },
  {
    key: '8',
    text: 'Sem-8',
    value: '8',
  },
]


const Batch = [
    {
      key: '1',
      text: '2017',
      value: '1',
    },
    {
      key: '2',
      text: '2018',
      value: '2',
    },
    {
      key: '3',
      text: '2019',
      value: '3',
    },
    {
      key: '4',
      text: '2020',
      value: '4',
    }
  ]


const Type = [
    {
      key: '1',
      text: 'Minor-1',
      value: '1',
    },
    {
      key: '2',
      text: 'Minor-2',
      value: '2',
    },
    {
      key: '3',
      text: 'Internals & Lab',
      value: '3',
    },
    {
      key: '4',
      text: 'Major',
      value: '4',
    },
    {
        key: '5',
        text: 'Grades & Credits',
        value: '5',
      },
      {
        key: '6',
        text: 'Supplementary',
        value: '6',
      },
  ]


const PostExams = () => {
    return(
      <Container>
  <div className="adminexam">
  <h2>Grades</h2>
  <a href="/Grades">View Grades</a>
  <br/>
  <br/>
  <a className="gaps">
    <Dropdown
      placeholder='Select Sem'
      openOnFocus
      selection
      options={Sem}
    />{' '}
    </a>
    <a className="gaps">
    <Dropdown
      placeholder='Select Batch'
      openOnFocus={false}
      selection
      options={Batch}
    />
    </a>
    <a className="gaps">
    <Dropdown
      placeholder='Select Type'
      openOnFocus={false}
      selection
      options={Type}
    />
    </a>
    <Upload/>
  </div>
  </Container>
    );
}

export default PostExams;
