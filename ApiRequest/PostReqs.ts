"use server";

const env = process.env.NEXT_APP_BACKEND;

export const postData = async (data: any, type: string) => {
  try {
    const res = await fetch(`${env}/api/v1/${type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error("Request Error");
    }
    return true;
  } catch (e: any) {
    console.log(e);
    return false;
  }
};

export const postComment = async (data: any, type: string, loc:string) => {
  try {
    const res = await fetch(`${env}/api/v1/${type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        loc
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error("Request Error");
    }
    return true;
  } catch (e: any) {
    console.log(e);
    return false;
  }
};

export const Search = async (data: string) => {
  try {
    const res = await fetch(`${env}/api/v1/shop/search`, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( {search:data} ),
    });
    if(!res.ok){throw new Error("Error")}
    const parsedUrl = await res.json();
    return { error: false, url: parsedUrl?.url };
  } catch (e: any) {
    console.log(e);
    return { error: true };
  }
};
