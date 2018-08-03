import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: 'dashboard1',
    icon: 'dashboard',
    path: 'dashboard1',
    children: [
      {
        name: '页面1',
        path: 'page1',
      },
      {
        name: '页面2',
        path: 'page2',
      },
      {
        name: '页面3',
        path: 'page3',
      },
    ],
  },
  {
    name: 'dashboard2',
    icon: 'dashboard',
    path: 'dashboard2',
    children: [
      {
        name: '页面1',
        path: 'page1',
      },
      {
        name: '页面2',
        path: 'page2',
      },
      {
        name: '页面3',
        path: 'page3',
      },
    ],
  },
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
