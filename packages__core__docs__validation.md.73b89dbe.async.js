(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36,30],{"1Yy9":function(e,n,t){"use strict";t("k1fw");var a={default:"Verification failed",required:"Can't be empty",enum:"Must be one of [${enum}]",whitespace:"cannot be empty",date:{format:"Not a valid date format",parse:"Cannot be converted to date format",invalid:"Invalid date format"},types:{string:"Only input string type",method:'Only enter "${type}" type',array:'Only enter "${type}" type',object:'Only enter "${type}" type',number:"Only enter numbers",date:"Only enter the date",boolean:'Only enter "${type}" type',integer:"Only input integers",float:"Only enter values",regexp:"The input does not match to go",email:"Incorrect email format",url:"The url format is incorrect",hex:'Only enter "${type}" type'},string:{len:"Must be $(len) characters",min:"Cannot be less than $(min) characters",max:"Cannot be more than $(max) characters",range:"The number of characters is between $(min)-$(max)"},number:{len:"The value can only be $(len)",min:"Cannot be less than $(min)",max:"Cannot be greater than $(max)",range:"Only between ${min}-${max}"},array:{len:"You must select the $(len) item",min:"No less than $(min) items",max:"Cannot be more than $(max) items",range:"Must choose between $(min)-$(max) items"},pattern:{mismatch:"The content entered does not meet the requirements"}};n["a"]=a},"9heZ":function(e,n,t){"use strict";t.r(n);t("GNNt");var a=t("wEI+"),r=t("0Owb"),o=(t("+L6B"),t("2/Rp")),s=(t("giR+"),t("fyUT")),i=(t("y8nQ"),t("Vl3Y")),l=(t("5NDa"),t("5rEg")),m=t("q1tI"),u=t.n(m),c=t("1Yy9"),d={labelCol:{span:4},wrapperCol:{span:20}},p={wrapperCol:{offset:4,span:16}};n["default"]=()=>{var e=e=>{console.log("Success:",e)},n=e=>{console.log("Failed:",e)};return u.a.createElement(a["b"],{form:{validateMessages:c["a"]}},u.a.createElement(i["a"],Object(r["a"])({style:{width:600}},d,{onFinish:e,onFinishFailed:n}),u.a.createElement(i["a"].Item,{label:"Project number",name:"projectNo",rules:[{required:!0,whitespace:!0,max:15}]},u.a.createElement(l["a"],null)),u.a.createElement(i["a"].Item,{label:"Number of Design Examples",name:"designCount",rules:[{type:"number",required:!0,min:1,max:1e3}]},u.a.createElement(s["a"],{style:{width:"100%"}})),u.a.createElement(i["a"].Item,p,u.a.createElement(o["a"],{type:"primary",htmlType:"submit"},"save"))))}},"K+nK":function(e,n){function t(e){return e&&e.__esModule?e:{default:e}}e.exports=t},aTMA:function(e,n,t){"use strict";t.r(n);var a=t("0Owb"),r=t("q1tI"),o=t.n(r),s=(t("B2uJ"),t("+su7"),t("qOys"),t("5Yjd")),i=t.n(s),l=o.a.memo((function(){var e=t("K+nK"),n=e(t("q1tI")),a=e(t("9heZ")),r=function(){return n.default.createElement(a.default,null)};return n["default"].createElement(r)}));n["default"]=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"validation-antd-form"},o.a.createElement("a",{"aria-hidden":"true",href:"#validation-antd-form"},o.a.createElement("span",{className:"icon icon-link"})),"validation antd form"),o.a.createElement("p",null,"Provide general messages for form validation and general validation rules that antd form does not"),o.a.createElement("blockquote",null,o.a.createElement("p",null,"Only need to be used once globally on the entry page")),o.a.createElement("h2",{id:"case"},o.a.createElement("a",{"aria-hidden":"true",href:"#case"},o.a.createElement("span",{className:"icon icon-link"})),"Case"),o.a.createElement("h3",{id:"basic-usage"},o.a.createElement("a",{"aria-hidden":"true",href:"#basic-usage"},o.a.createElement("span",{className:"icon icon-link"})),"Basic usage")),o.a.createElement(i.a,Object(a["a"])({source:{tsx:"import React from 'react';\nimport { ConfigProvider, Form, Input, InputNumber, Button } from 'antd';\nimport validateMessages from '../src/validation';\n\nconst layout = {\n  labelCol: { span: 4 },\n  wrapperCol: { span: 20 },\n};\nconst tailLayout = {\n  wrapperCol: { offset: 4, span: 16 },\n};\n\nexport default () => {\n  const onFinish = (values: any) => {\n    console.log('Success:', values);\n  };\n\n  const onFinishFailed = (errorInfo: any) => {\n    console.log('Failed:', errorInfo);\n  };\n\n  return (\n    <ConfigProvider form={{ validateMessages }}>\n      <Form\n        style={{\n          width: 600,\n        }}\n        {...layout}\n        onFinish={onFinish}\n        onFinishFailed={onFinishFailed}\n      >\n        <Form.Item\n          label=\"Project number\"\n          name=\"projectNo\"\n          rules={[{ required: true, whitespace: true, max: 15 }]}\n        >\n          <Input />\n        </Form.Item>\n\n        <Form.Item\n          label=\"Number of Design Examples\"\n          name=\"designCount\"\n          rules={[{ type: 'number', required: true, min: 1, max: 1000 }]}\n        >\n          <InputNumber style={{ width: '100%' }} />\n        </Form.Item>\n\n        <Form.Item {...tailLayout}>\n          <Button type=\"primary\" htmlType=\"submit\">\n            save\n          </Button>\n        </Form.Item>\n      </Form>\n    </ConfigProvider>\n  );\n};\n",jsx:"import React from 'react';\nimport { ConfigProvider, Form, Input, InputNumber, Button } from 'antd';\nimport validateMessages from '../src/validation';\nconst layout = {\n  labelCol: {\n    span: 4,\n  },\n  wrapperCol: {\n    span: 20,\n  },\n};\nconst tailLayout = {\n  wrapperCol: {\n    offset: 4,\n    span: 16,\n  },\n};\nexport default () => {\n  const onFinish = (values) => {\n    console.log('Success:', values);\n  };\n\n  const onFinishFailed = (errorInfo) => {\n    console.log('Failed:', errorInfo);\n  };\n\n  return (\n    <ConfigProvider\n      form={{\n        validateMessages,\n      }}\n    >\n      <Form\n        style={{\n          width: 600,\n        }}\n        {...layout}\n        onFinish={onFinish}\n        onFinishFailed={onFinishFailed}\n      >\n        <Form.Item\n          label=\"Project number\"\n          name=\"projectNo\"\n          rules={[\n            {\n              required: true,\n              whitespace: true,\n              max: 15,\n            },\n          ]}\n        >\n          <Input />\n        </Form.Item>\n\n        <Form.Item\n          label=\"Number of Design Examples\"\n          name=\"designCount\"\n          rules={[\n            {\n              type: 'number',\n              required: true,\n              min: 1,\n              max: 1000,\n            },\n          ]}\n        >\n          <InputNumber\n            style={{\n              width: '100%',\n            }}\n          />\n        </Form.Item>\n\n        <Form.Item {...tailLayout}>\n          <Button type=\"primary\" htmlType=\"submit\">\n            save\n          </Button>\n        </Form.Item>\n      </Form>\n    </ConfigProvider>\n  );\n};\n"}},{path:"/_demos/validation",CSSInDependencies:["antd/dist/antd.css"],dependencies:{react:">=16.9.0","react-dom":">=16.9.0",antd:"4.8.4"},files:{"src/validation.ts":{path:"../src/validation",content:"// eslint-disable-next-line import/no-mutable-exports\nlet validateMessages = {\n  default: 'Verification failed',\n  required: `Can't be empty`,\n  enum: 'Must be one of [${enum}]',\n  whitespace: 'cannot be empty',\n  date: {\n    format: 'Not a valid date format',\n    parse: 'Cannot be converted to date format',\n    invalid: 'Invalid date format',\n  },\n  types: {\n    string: 'Only input string type',\n    method: 'Only enter \"${type}\" type',\n    array: 'Only enter \"${type}\" type',\n    object: 'Only enter \"${type}\" type',\n    number: 'Only enter numbers',\n    date: 'Only enter the date',\n    boolean: 'Only enter \"${type}\" type',\n    integer: 'Only input integers',\n    float: 'Only enter values',\n    regexp: 'The input does not match to go',\n    email: 'Incorrect email format',\n    url: 'The url format is incorrect',\n    hex: 'Only enter \"${type}\" type',\n  },\n  string: {\n    len: 'Must be $(len) characters',\n    min: 'Cannot be less than $(min) characters',\n    max: 'Cannot be more than $(max) characters',\n    range: 'The number of characters is between $(min)-$(max)',\n  },\n  number: {\n    len: 'The value can only be $(len)',\n    min: 'Cannot be less than $(min)',\n    max: 'Cannot be greater than $(max)',\n    range: 'Only between ${min}-${max}',\n  },\n  array: {\n    len: 'You must select the $(len) item',\n    min: 'No less than $(min) items',\n    max: 'Cannot be more than $(max) items',\n    range: 'Must choose between $(min)-$(max) items',\n  },\n  pattern: {\n    mismatch: 'The content entered does not meet the requirements',\n  },\n};\n\nexport default validateMessages;\n\n/**\n * Configure the default prompt message\n * @param messages Message template\n */\nexport const configValidateMessage = (messages: Partial<typeof validateMessages>) => {\n  validateMessages = {\n    ...validateMessages,\n    ...messages,\n  };\n};\n"}}}),o.a.createElement(l,null)))}}}]);