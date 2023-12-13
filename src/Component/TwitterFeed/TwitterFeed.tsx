import  { useEffect } from "react";
import { Card, CardContent, Container, useTheme } from "@mui/material";

const TwitterFeed = ({ username, tweetLimit }: { username: string; tweetLimit: number }) => {
  const theme = useTheme();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.charset = "utf-8";
    script.async = true;

    
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []); 

  return (
    <Container maxWidth="sm" sx={{ marginTop: 2 ,marginBottom:4 }}>
      <Card sx={{ backgroundColor: theme.palette.background.default}}>
        <CardContent>
          {/* <Typography variant="h5" component="div" sx={{ display: "flex", alignItems: "center", color: theme.palette.primary.main }}>
            <TwitterIcon sx={{ mr: 1 }} />
            Tweets by {username}
          </Typography> */}
          <div>
            <a
              className="twitter-timeline"
              data-width="600"
              data-dnt="true"
              data-tweet-limit={tweetLimit}
              href={`https://twitter.com/${username}?ref_src=twsrc%5Etfw`}
            >
              Tweets by {username}
            </a>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default TwitterFeed;
