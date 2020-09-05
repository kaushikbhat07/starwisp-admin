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
								<p>
									Hello! Website is up and running.
								</p>
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
								<p>Wow, thats great!</p>
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
								<p>Good job mate!</p>
      						</Media>
						</Media>
						<div className="d-block chat-time">
							<span className="text-muted text-md">Today at 3:00 PM</span>
						</div>						
					</div>

					<div className="chat-wrapper mb-4">
						<Media>
							<Media body className="ml-4 bg-primary p-3 chat-box text-white mr-3">
								<p>It's working. Thank you!</p>
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