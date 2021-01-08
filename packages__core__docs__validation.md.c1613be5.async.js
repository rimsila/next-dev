(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36,30],{"9heZ":function(n,e,t){"use strict";t.r(e);var a=t("0Owb"),r=(t("+L6B"),t("2/Rp")),o=(t("giR+"),t("fyUT")),l=(t("y8nQ"),t("Vl3Y")),i=(t("5NDa"),t("5rEg")),s=t("q1tI"),m=t.n(s),u={labelCol:{span:4},wrapperCol:{span:20}},c={wrapperCol:{offset:4,span:16}};e["default"]=()=>{var n=n=>{console.log("Success:",n)},e=n=>{console.log("Failed:",n)};return m.a.createElement(l["a"],Object(a["a"])({style:{width:"100%"}},u,{onFinish:n,onFinishFailed:e}),m.a.createElement(l["a"].Item,{label:"number",name:"projectNo",rules:[{required:!0,whitespace:!0,max:15}]},m.a.createElement(i["a"],null)),m.a.createElement(l["a"].Item,{label:"Examples",name:"designCount",rules:[{type:"number",required:!0,min:1,max:1e3}]},m.a.createElement(o["a"],{style:{width:"100%"}})),m.a.createElement(l["a"].Item,c,m.a.createElement(r["a"],{type:"primary",htmlType:"submit"},"save")))}},"K+nK":function(n,e){function t(n){return n&&n.__esModule?n:{default:n}}n.exports=t},aTMA:function(n,e,t){"use strict";t.r(e);var a=t("0Owb"),r=t("q1tI"),o=t.n(r),l=(t("B2uJ"),t("+su7"),t("qOys"),t("5Yjd")),i=t.n(l),s=o.a.memo((function(){var n=t("K+nK"),e=n(t("q1tI")),a=n(t("9heZ")),r=function(){return e.default.createElement(a.default,null)};return e["default"].createElement(r)}));e["default"]=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"validation-antd-form"},o.a.createElement("a",{"aria-hidden":"true",href:"#validation-antd-form"},o.a.createElement("span",{className:"icon icon-link"})),"validation antd form"),o.a.createElement("p",null,"Provide general messages for form validation and general validation rules that antd form does not"),o.a.createElement("blockquote",null,o.a.createElement("p",null,"Only need to be used once globally on the entry page")),o.a.createElement("h2",{id:"case"},o.a.createElement("a",{"aria-hidden":"true",href:"#case"},o.a.createElement("span",{className:"icon icon-link"})),"Case"),o.a.createElement("h3",{id:"basic-usage"},o.a.createElement("a",{"aria-hidden":"true",href:"#basic-usage"},o.a.createElement("span",{className:"icon icon-link"})),"Basic usage")),o.a.createElement(i.a,Object(a["a"])({source:{tsx:"import React from 'react';\nimport { Form, Input, InputNumber, Button } from 'antd';\n\nconst layout = {\n  labelCol: { span: 4 },\n  wrapperCol: { span: 20 },\n};\nconst tailLayout = {\n  wrapperCol: { offset: 4, span: 16 },\n};\n\nexport default () => {\n  const onFinish = (values: any) => {\n    console.log('Success:', values);\n  };\n\n  const onFinishFailed = (errorInfo: any) => {\n    console.log('Failed:', errorInfo);\n  };\n\n  return (\n    <Form\n      style={{\n        width: '100%',\n      }}\n      {...layout}\n      onFinish={onFinish}\n      onFinishFailed={onFinishFailed}\n    >\n      <Form.Item\n        label=\"number\"\n        name=\"projectNo\"\n        rules={[{ required: true, whitespace: true, max: 15 }]}\n      >\n        <Input />\n      </Form.Item>\n\n      <Form.Item\n        label=\"Examples\"\n        name=\"designCount\"\n        rules={[{ type: 'number', required: true, min: 1, max: 1000 }]}\n      >\n        <InputNumber style={{ width: '100%' }} />\n      </Form.Item>\n\n      <Form.Item {...tailLayout}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          save\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n",jsx:"import React from 'react';\nimport { Form, Input, InputNumber, Button } from 'antd';\nconst layout = {\n  labelCol: {\n    span: 4,\n  },\n  wrapperCol: {\n    span: 20,\n  },\n};\nconst tailLayout = {\n  wrapperCol: {\n    offset: 4,\n    span: 16,\n  },\n};\nexport default () => {\n  const onFinish = (values) => {\n    console.log('Success:', values);\n  };\n\n  const onFinishFailed = (errorInfo) => {\n    console.log('Failed:', errorInfo);\n  };\n\n  return (\n    <Form\n      style={{\n        width: '100%',\n      }}\n      {...layout}\n      onFinish={onFinish}\n      onFinishFailed={onFinishFailed}\n    >\n      <Form.Item\n        label=\"number\"\n        name=\"projectNo\"\n        rules={[\n          {\n            required: true,\n            whitespace: true,\n            max: 15,\n          },\n        ]}\n      >\n        <Input />\n      </Form.Item>\n\n      <Form.Item\n        label=\"Examples\"\n        name=\"designCount\"\n        rules={[\n          {\n            type: 'number',\n            required: true,\n            min: 1,\n            max: 1000,\n          },\n        ]}\n      >\n        <InputNumber\n          style={{\n            width: '100%',\n          }}\n        />\n      </Form.Item>\n\n      <Form.Item {...tailLayout}>\n        <Button type=\"primary\" htmlType=\"submit\">\n          save\n        </Button>\n      </Form.Item>\n    </Form>\n  );\n};\n"}},{path:"/_demos/validation",CSSInDependencies:["antd/dist/antd.css"],dependencies:{react:">=16.9.0","react-dom":">=16.9.0",antd:"4.8.4"},files:{}}),o.a.createElement(s,null)))}}}]);