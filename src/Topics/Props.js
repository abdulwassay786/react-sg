import React from 'react';
import CommentDetail from '../Components/CommentDetail';
import ApprovalCard from '../Components/ApprovalCard';

function Props() {
    return (
        <div>
            <div className="ui container comments">
        <ApprovalCard>
            <h4>Warning!</h4>
            Are you sure ?
        </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          date="Today at 6:00 pm"
          text="Nice blog post!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          date="Today at 2:35 pm"
          text="Good work!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jason"
          date="Yesterday at 8:00 am"
          text="Good work!"
        />
      </ApprovalCard>
    </div>
        </div>
    )
}

export default Props
