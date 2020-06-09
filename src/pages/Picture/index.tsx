import { useParams, RouteComponentProps, withRouter } from 'react-router-dom';
import React, { useState, useEffect, FC } from 'react';
import { Tag, Slider, Button } from 'antd';
import Moment from 'moment';
import { Content, PictureWrapper, Block } from './style';
import getPicture from './service';

type Props = RouteComponentProps<{ id: string }>;

const Picture: FC<Props> = () => {
  const { id } = useParams();
  const [pic, setPic] = useState({});

  useEffect(() => {
    getPicture(id).then(res => setPic(res.data.data));
  }, []);

  if (pic.picture) {
    const { picture, scores, tags } = pic;
  }

  return (
    <div>div</div>
    // <Content>
    //   <PictureWrapper>
    //     <img src={picture.picture.picture_id} alt="loading" />
    //   </PictureWrapper>
    //   <Block>
    //     <div className="titleWrapper">
    //       当前总分：
    //       <span className="totalScore">{picture.picture.total_score}</span>
    //     </div>
    //     <div className="titleWrapper">
    //       {/* 展示所有评分 */}
    //       {picture.scores.map(score => (
    //         <Tag
    //           key={score.score_id}
    //           title="yusa"
    //           color="red"
    //           closable
    //           // onClose={e => {
    //           //   e.preventDefault();
    //           //   deleteScore();
    //           // }}
    //         >
    //           {score.score}
    //         </Tag>
    //       ))}
    //     </div>
    //     <div className="newScore">
    //       <Slider
    //         className="slider"
    //         defaultValue={80}
    //         // onChange={score => {
    //         //   this.handleNewScore(score);
    //         // }}
    //       />
    //       <Button danger>
    //         {/* onClick={this.addScore()} */}
    //         增加评分
    //       </Button>
    //     </div>
    //     <div className="titleWrapper">
    //       {picture.tags.map(tag => (
    //         <div
    //           key={tag.tag_id}
    //           className="tagStyle"
    //           title="yusa"
    //           color="cyan"
    //           // onClose={e => {
    //           //   e.preventDefault();
    //           //   this.handleDelTag();
    //           // }}
    //         >
    //           #{tag.tag}
    //         </div>
    //       ))}
    //       {/* <Tag onClick={this.showAddTagModal} className="site-tag-plus">
    //         + 新标签
    //       </Tag>
    //       <AddTag
    //         visible={this.state.addTagModal}
    //         hideAddTagModal={this.hideAddTagModal}
    //         tags={tags}
    //         pid={picture_id}
    //       /> */}
    //     </div>
    //     <div className="foot">
    //       <span>
    //         投稿时间：
    //         {Moment(Number(`${picture.picture.create_time}000`)).format('YYYY-MM-DD')}
    //       </span>
    //       <div>
    //         投稿人：yusa
    //         {/* {user} */}
    //       </div>
    //     </div>
    //   </Block>
    // </Content>
  );
};

export default withRouter(Picture);
