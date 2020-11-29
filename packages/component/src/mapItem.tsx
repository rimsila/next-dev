import React, { FC, Fragment } from 'react';
import { Col, ConfigProvider, Divider, Popover, Typography } from 'antd';
import CodeSandboxOutlined from '@ant-design/icons/CodeSandboxOutlined';
import { NextRow } from './NextRow';
import { validateMessages } from '@wetrial/core';

interface IUseMapItem {
  data: any[];
  children?: React.ReactNode;
  antSpan?: number;
  isAntCol?: boolean;
  gut1?: number;
  gut2?: number;
  isDivider?: boolean;
  cssProps?: React.CSSProperties;
}

const { Paragraph } = Typography;

export const MapItem: FC<IUseMapItem> = ({
  gut1,
  gut2,
  isAntCol = true,
  data = [],
  antSpan = 6,
  isDivider,
  cssProps,
}) => {
  return (
    <>
      <ConfigProvider {...{ form: { validateMessages } }}>
        <NextRow {...{ gut1, gut2 }}>
          {data.map((item, key: number) => (
            <Fragment key={key}>
              {isAntCol && (
                <>
                  <Col span={antSpan}>
                    {item.item}
                    <span
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: 10,
                        ...cssProps,
                      }}
                    >
                      <Paragraph
                        style={{ justifyContent: 'center', marginBottom: 6, fontSize: 18 }}
                        copyable={{ text: item?.copyCode }}
                      />
                      <Popover
                        content={
                          <>
                            <Paragraph code copyable style={{ color: '#c41d7f' }}>
                              {item?.copyCode}
                            </Paragraph>
                          </>
                        }
                      >
                        <CodeSandboxOutlined
                          style={{ marginLeft: 4, position: 'relative', bottom: 0, fontSize: 18 }}
                        />
                      </Popover>
                    </span>
                  </Col>
                </>
              )}
              {isDivider && <Divider />}
            </Fragment>
          ))}
        </NextRow>
      </ConfigProvider>
    </>
  );
};

export default MapItem;
