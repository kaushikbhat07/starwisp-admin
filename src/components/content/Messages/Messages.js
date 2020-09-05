import React, { useState } from 'react';
import { Card, Media } from 'reactstrap';
import './Messages.css'

function Messages() {
	// const [count, setCount] = useState(0);

	return (
		<div>
			<Card className="messages-card shadow p-3">
				<p>
					<h4 className="text-center pb-3">Messages</h4>

					<div className="chat-wrapper ml-2 mb-4">
						<Media>
							<Media left href="#">
								<img src="https://via.placeholder.com/50" className="chat-profile" alt="Generic placeholder image" />
							</Media>
							<Media body className="ml-4 bg-success p-3 chat-box text-white mr-3">
								Hello! Website is up and running.
      						</Media>
						</Media>
						<div className="d-block chat-time">
							<span className="text-muted text-md">Today at 3:00 PM</span>
						</div>
					</div>

					<div className="chat-wrapper ml-2 mb-4">
						<Media>
							<Media left href="#">
								<img src="https://via.placeholder.com/50" className="chat-profile" alt="Generic placeholder image" />
							</Media>
							<Media body className="ml-4 bg-success p-3 chat-box text-white mr-3">
								Wow, thats great!
      						</Media>
						</Media>
						<div className="d-block chat-time">
							<span className="text-muted text-md">Today at 3:00 PM</span>
						</div>						
					</div>

					<div className="chat-wrapper ml-2 mb-4">
						<Media>
							<Media left href="#">
								<img src="https://via.placeholder.com/50" className="chat-profile" alt="Generic placeholder image" />
							</Media>
							<Media body className="ml-4 bg-success p-3 chat-box text-white mr-3">
								Good job mate!
      						</Media>
						</Media>
						<div className="d-block chat-time">
							<span className="text-muted text-md">Today at 3:00 PM</span>
						</div>						
					</div>

					<div className="chat-wrapper ml-2 mb-4">
						<Media>
							<Media body className="ml-4 bg-primary p-3 chat-box text-white mr-3">
								It's working. Thank you!
      						</Media>
							<Media right href="#" className="mr-3">
								<img src="https://via.placeholder.com/50" className="chat-profile" alt="Generic placeholder image" />
							</Media>
						</Media>
						<div className="d-block chat-time">
							<span className="text-muted text-md">Today at 3:00 PM</span>
						</div>						
					</div>

					<div className="m-3">
						<input type="text" class="form-control" placeholder="Send a message"></input>
					</div>
				</p>
			</Card>
		</div>
	);
}

export default Messages;