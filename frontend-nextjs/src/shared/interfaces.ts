export interface DiariesProps {
  id: number;
  attributes: {
    uid: string;
    description: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
  };
}
