import React, { FC, Fragment } from 'react';
import { Col, Popover, Typography } from 'antd';
import CodeSandboxOutlined from '@ant-design/icons/CodeSandboxOutlined';
import { NextRow } from './NextRow';

interface IUseMapItem extends React.CSSProperties {
  data: any[];
  children?: React.ReactNode;
  antSpan?: number;
  isAntCol?: boolean;
}

const { Paragraph } = Typography;

export const MapItem: FC<IUseMapItem> = ({ isAntCol = true, data = [], antSpan = 6, ...rest }) => {
  return (
    <>
      <NextRow>
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
                      ...rest,
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
                        style={{ marginLeft: 4, position: 'relative', bottom: -5, fontSize: 18 }}
                      />
                    </Popover>
                  </span>
                </Col>
              </>
            )}
          </Fragment>
        ))}
      </NextRow>
    </>
  );
};

export default MapItem;
