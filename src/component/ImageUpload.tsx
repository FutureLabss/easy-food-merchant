import React, { useRef } from 'react';
import { RiAddFill } from "react-icons/ri"
import { Box, Grid, InputLabel, TextField, Stack, FormControl } from '@mui/material';

interface Props {
  onUpload: (file: File) => void;
}

const ImageUpload: React.FC<Props> = ({ onUpload }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" ref={inputRef} onChange={handleFileUpload} style={{ display: 'none', }} />
      <button onClick={() => inputRef.current?.click()} style={{

        // width: { xs: "39px", sm: "63px", md: "6.53vw" },
        // height: { xs: "39px", sm: "63px", md: "6.53vw" },
        borderRadius: "16px",
        background: "#F4F5F5",
        border: "1px dashed #99A39E"
      }}>
        <Box mt={{ xs: "13px", sm: "21px", md: "1vw" }}
        //  sx={{width: {xs:"39px", sm:"63px", md:"6.53vw"},
        //  height: {xs:"39px", sm:"63px", md:"6.53vw"}, 
        //  borderRadius:"16px", 
        //  background: "#F4F5F5",
        //  border: "1px dashed #99A39E"}}
        >
          <Box sx={{
            mt: { xs: "10px", sm: "27px", md: "3vw" },
            mx: { xs: "15px", sm: "27px", md: "2.58vw" },
          }}>

            <RiAddFill >

            </RiAddFill>
          </Box>
        </Box>
      </button>
    </div>
  );
};

export default ImageUpload;
