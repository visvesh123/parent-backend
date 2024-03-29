import React, { useContext, useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import {Container} from 'reactstrap';
import AdminNav from './AdminNav';


const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async e => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        Uploads={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'Uploads',
        dataIndex: 'Uploads',
        width: '30%',
        editable: true,
      },
      {
        title: 'Sem',
        dataIndex: 'Sem',
      },
      {
        title: 'Batch',
        dataIndex: 'Batch',
      },
      {
        title: 'Type',
        dataIndex: 'Type',
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [
        {
          key: '0',
          Uploads: 'Edward King 0',
          Sem: '32',
          Batch: 'London',
          Type: 'Minor-1',
        },
        {
          key: '1',
          Uploads: 'Edward King 1',
          Sem: '32',
          Batch: 'London',
          Type: 'Minor-2',
        },
      ],
      count: 2,
    };
  }

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter(item => item.key !== key),
    });
  };

//   handleAdd = () => {
//     const { count, dataSource } = this.state;
//     const newData = {
//       key: count,
//       Uploads: `Edward King ${count}`,
//       age: 32,
//       Batch: `London, Park Lane no. ${count}`,
//     };
//     this.setState({
//       dataSource: [...dataSource, newData],
//       count: count + 1,
//     });
//   };

//   handleSave = row => {
//     const newData = [...this.state.dataSource];
//     const index = newData.findIndex(item => row.key === item.key);
//     const item = newData[index];
//     newData.splice(index, 1, { ...item, ...row });
//     this.setState({
//       dataSource: newData,
//     });
//   };

  render() {
    const { dataSource } = this.state;
    const components = {
    //   body: {
    //     row: EditableRow,
    //     cell: EditableCell,
    //   },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        // onCell: record => ({
        //   record,
        // //  editable: col.editable,
        //   dataIndex: col.dataIndex,
        //   title: col.title,
        //   handleSave: this.handleSave,
        // }),
      };
    });
    return (      

       <Container>
        <AdminNav/>
        <div>
        <h2 style={{paddingTop: "20%"}}>Grades</h2>
        </div>
      <div>
        <Table
          components={components}
          //rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
      </Container>
    );
  }
}

export default EditableTable;