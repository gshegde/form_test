export const suggestionBank = [
    "ybl.com",
    "hdfc.com",
    "freecharge.com",
    "paytm.com",
    "icici.com",
    "sbi.com",
  ];
  export type FileExplorer = {
    isFolder: boolean;
    id: number;
    content?: string[];
    children?: FileExplorer[];
    name?: string;
    isFolderOpen?: boolean;
  };
  export const fileExplorer: FileExplorer[] = [
    {
      name: "root",
      isFolder: true,
      id: 1,
      content: ["package.json", "package.lock.json", "env"],
      children: [
        {
          id: 2,
          name: "src",
          isFolder: true,
          content: ["index.tsx"],
          children: [
            {
              id: 3,
              isFolder: true,
              name: "payments",
              children: [
                {
                  id: 4,
                  isFolder: false,
                  name: "components",
                },
                {
                  id: 5,
                  isFolder: false,
                  name: "organisms",
                },
              ],
            },
          ],
        },
        {
          id: 6,
          name: "pages",
          isFolder: true,
          content: [],
          children: [
            {
              id: 7,
              isFolder: true,
              name: "payments",
              children: [
                {
                  id: 8,
                  isFolder: true,
                  name: "routes",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 9,
      name: "CSS_Branding",
      isFolder: true,
      content: ["abc.json", "xyz.lock.json", "prod"],
      children: [
        {
          id: 10,
          name: "organisms",
          isFolder: true,
          content: [],
          children: [
            {
              id: 11,
              name: "css",
              isFolder: true,
              children: [
                {
                  id: 12,
                  isFolder: false,
                  name: "scss",
                },
                {
                  id: 13,
                  isFolder: false,
                  name: "bootstrap",
                },
              ],
            },
          ],
        },
        {
          id: 14,
          name: "atoms",
          isFolder: true,
          content: [],
          children: [
            {
              id: 15,
              isFolder: true,
              name: "materialUi",
              children: [
                {
                  id: 16,
                  isFolder: true,
                  name: "designs",
                },
              ],
            },
          ],
        },
      ],
    },
  ];
    