"use client";

import React, { useEffect, useState } from "react";
import DesAdd from "../EditorComps/AddComps/DesAdd";
import Quill from "@/Quill/Quill";
import { putAdmin } from "@/ApiRequest/PostAdmin";
import AddTitle from "../EditorComps/AddComps/AddTitle";
import AddAuthor from "./AddAuthor";
import EditSingleCover from "../EditorComps/EditorComp/EditSingleCover";
import { useRouter } from "next/navigation";
import { DelData } from "@/ApiRequest/DeleteReqs";
import { FaTrash } from "react-icons/fa";

const EditStory = ({ data }: { data: any }) => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [author, setAuthor] = useState("");
  const [profile, setProfile] = useState();
  const [imageBlob, setImageBlob] = useState("");
  const [profileBlob, setProfileBlob] = useState("");
  console.log(profile, profileBlob);
  const redirect: any = useRouter();
  useEffect(() => {
    if (data) {
      setTitle(data?.title);
      setDescription(data?.description);
      setImageBlob(`/api/files${data?.image}`);
      setProfileBlob(`/api/files${data?.profile}`);
      setAuthor(data?.author);
    }
  }, [data]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!title || !description) return alert("Enter All Data");
    if (!content && !data?.content) return alert("Enter All Data");
    if (!imageBlob && !image) return alert("Enter Cover Image!");
    if (!profile && !profileBlob) return alert("Enter Cover Image!");
    const newFormData: any = new FormData();
    newFormData.append("cover", image);
    newFormData.append("title", title);
    newFormData.append("description", description);
    newFormData.append("content", content);
    // map to images
    if (images?.length > 0) {
      const lengthOfArr = images.length;
      newFormData.append("images", lengthOfArr);
      for (let i = 0; i < lengthOfArr; i++) {
        newFormData.append(`images${i}`, images[i]);
      }
    }
    //post reqs
    const formReq: boolean = await putAdmin(newFormData, "stories", data?._id);
    if (formReq) {
      alert("Blog Edited Successfully!");
      return redirect.push("/dashboard/stories");
    } else {
      return alert("Failed to add Data!");
    }
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <EditSingleCover
        oldImage={imageBlob || data?.image}
        setImage={setImage}
      />
      <br />
      <AddAuthor
        setAuthor={setAuthor}
        setProfile={setProfile}
        author={author}
        profileImage={`/api/files${data?.profile}`}
      />
      <AddTitle title={title} setTitle={setTitle} />
      <DesAdd description={description} setDescription={setDescription} />
      <Quill
        initial={data?.content || ""}
        contentEdit={setContent}
        imagesEdit={setImages}
      />

      {/* submit data */}
      <center>
        <br />
        <br />{" "}
        <button
          type="button"
          className="bg-red-500 text-white text-4xl rounded-2xl w-full flex justify-center"
          style={{
            padding: "10px",
            height: "fit-content",
            gap: "20px",
            maxWidth: "1000px",
          }}
          onClick={async () => {
            const confirm = window.confirm("Delete This Item?");
            if (!confirm) return;
            const del = await DelData("stories", data?._id);
            if (!del) return alert("Data Not Deleted");
            alert("Data Deleted Sccessfully");
            return redirect.push("/dashboard/stories");
          }}
        >
          Delete This Blog
          <FaTrash />
        </button>
        <br />
        <button
          type="submit"
          className="w-full bg-blue-400 hover:shadow-xl transition-all duration-300"
          style={{
            background: "#3495eb",
            maxWidth: "1000px",
            color: "white",
            padding: "10px",
            fontSize: "20px",
            margin: "20px auto",
            borderRadius: "10px",
          }}
        >
          Save Changes And Accept!
        </button>
      </center>
    </form>
  );
};

export default EditStory;
