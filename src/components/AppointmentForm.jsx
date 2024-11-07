import React  from 'react';
import { Form, Input, Button, Select, Typography, Space, Row, Col } from 'antd';

const { Title, Text } = Typography;
const { Option } = Select;

function AppointmentForm() {
  

  return (
    <div
      style={{
        width: '657px',
        height: '579px',
        margin: '0 auto',
        padding: '40px 60px 40px 60px',
        border: '1px solid #d9d9d9',
        borderRadius: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        position: 'centre',
        top: '-309px',
        left: '-529px',
      }}
    >
      <Space direction="vertical" size={40} style={{ width: '100%' }}>
        {/* Top Name */}
        <div style={{ width: '474px', height: '81px', textAlign: 'center' }}>
          <Text
            type="secondary"
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              fontFamily: 'Montserrat',
              color: '#252B42',
              width: '90px',
               height: '24px',top:'40px',left:'276.5px'
            }}
          >
            Contact Us
          </Text>
          <Title
            level={2}
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              color: '#252B42',
              fontFamily: 'Montserrat',
              lineHeight: '1.2',
              alignItems:'center',
              width: '474px',
               height: '57px',top:'64px',left:'91.5px'
            }}
          >
            Make an Appointment
          </Title>
        </div>

        {/* Inner Main Form */}
        <Form
          layout="vertical"
          style={{ maxWidth: '537px', gap: '20px', width: '100%' }}
        >
          <Row gutter={[16, 16]}>
            {/* Full Name and Email Fields */}
            <Col span={12}>
              <Form.Item
                label="Full Name"
                name="fullName"
                rules={[{ required: true, message: 'Please enter your full name' }]}
                style={{ width: '255px', height: '50px' }}
              >
                <Input placeholder="Enter your full name" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please enter your email', type: 'email' }]}
                style={{ width: '255px', height: '50px' }}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>
            </Col>

            {/* Service Selections */}
            <Col span={12}>
              <Form.Item
                label="Service"
                name="service"
                rules={[{ required: true, message: 'Please select a service' }]}
                style={{ width: '255px', height: '50px' }}
              >
                <Select placeholder="Please Select">
                  <Option value="consultation">Consultation</Option>
                  <Option value="follow-up">Follow-up</Option>
                </Select>
              </Form.Item>
            </Col>

            {/* Available Time Selection */}
            <Col span={12}>
              <Form.Item
                label="Available Time"
                name="time"
                rules={[{ required: true, message: 'Please select a time' }]}
                style={{ width: '255px', height: '50px' }}
              >
                <Select placeholder="Please Select">
                  <Option value="4:00">4:00 Available</Option>
                  <Option value="5:00">5:00 Available</Option>
                </Select>
              </Form.Item>
            </Col>

            {/* Message Area */}
            <Col span={24}>
              <Form.Item label="Message" name="message" style={{ width: '537px', height: '140px' }}>
                <Input.TextArea placeholder="Write your message" rows={4} />
              </Form.Item>
            </Col>

            {/* Submit Button */}
            <Col span={24}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  
                  style={{
                    backgroundColor: '#23A6F0',
                    color: '#fff',
                    height: '58px',
                    width: '218px',
                  }}
                >Book Appointment
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Space>
    </div>
  );
}

export default AppointmentForm;