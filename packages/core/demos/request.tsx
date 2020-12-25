// import React, { useState } from 'react';
// // import { httpRequest } from '../src/axios-util';
// import { catchError } from '../src/error-handler';
// import { NextButton, MapItem } from '@wetrial/component';
// import { message } from 'antd';

// export default () => {
//   const [value, setValue] = useState(null);

//   const getUser = async () => {
//     const res: any = await httpRequest('get', `/users`).catch(catchError);
//     setValue(res?.data[0]);
//   };

//   const delUser = async () => {
//     if (value?.id) {
//       await httpRequest('delete', `/users/${value?.id}`).catch(catchError);
//       await getUser();
//     } else {
//       message.error("Don't have User Yet!");
//     }
//   };
//   const data = [
//     {
//       item: (
//         <>
//           <h4>Welcome {value?.name || '_ _ _ _ _ _ _ _ _'} </h4>
//           <NextButton next="cyan_base" type="primary" onClick={() => getUser()}>
//             Fetch User Name
//           </NextButton>{' '}
//         </>
//       ),
//       copyCode: `httpRequest('get', '/users').catch(catchError);`,
//     },
//     {
//       item: (
//         <>
//           <h4>Welcome {value?.name || '_ _ _ _ _ _ _ _ _'} </h4>
//           <NextButton next="cyan_base" type="primary" onClick={delUser}>
//             Delete & Refetch
//           </NextButton>
//         </>
//       ),
//       copyCode: `httpRequest('delete', '/users/${value?.id || 'id'}').catch(catchError)`,
//     },
//   ];

//   return (
//     <>
//       <MapItem data={data} antSpan={7} />
//     </>
//   );
// };
