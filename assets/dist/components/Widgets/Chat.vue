<template>
	<div class="chat-wrapper">
		<vue-perfect-scrollbar :settings="settings" style="height:413px">
			<div class="chat-section overlay">
				<div class="chat-block d-flex" v-for="(chat, key) in chats" :class="{'even': chat.admin}" :key="key">
					<div class="img-wrap mr-20">
						<img :src="chat.img" class="rounded-circle" alt="user" width="40" height="40" />
					</div>
					<div class="text-content-wrap">
						<div class="chat-text mb-10">
							<p class="font-sm mb-0">{{ chat.message }}</p>
						</div>
						<span class="text-muted font-xs d-block text-right chat-time">{{ chat.time }}</span>
					</div>
				</div>
			</div>
		</vue-perfect-scrollbar>
		<div class="send-msg p-20 d-flex">
			<input type="text" v-model="chatMessage" class="form-control mr-20" placeholder="Reply"
				style="resize: none; cursor: text" @keyup.enter="sendMessage" />
			<b-button size="sm" class="text-capitalize px-3" variant="primary" @click="sendMessage">{{$t('message.send')}}
			</b-button>
		</div>
	</div>
</template>

<script>
	const chats = [
		{
			img: "/static/img/user-1.jpg",
			message:
				"This is exactly I needed. You guys did a great job. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			admin: false,
			time: "2 Hours ago"
		},
		{
			img: "/static/img/user-2.jpg",
			message:
				"We are always here to help you. Our customer care service is 24X7. ",
			admin: true,
			time: "2 Hours ago"
		},
		{
			img: "/static/img/user-1.jpg",
			message: "I got it fixed with your guidelines. Great and quick support !",
			admin: false,
			time: "2 Hours ago"
		},
		{
			img: "/static/img/user-2.jpg",
			message:
				"We are always here to help you. Our customer care service is 24X7. ",
			admin: true,
			time: "2 Hours ago"
		},
		{
			img: "/static/img/user-1.jpg",
			message: "I got it fixed with your guidelines. Great and quick support !",
			admin: false,
			time: "2 Hours ago"
		}
	];
	export default {
		name: "chat",
		data() {
			return {
				chatMessage: "",
				chats: chats,
				settings: {
					maxScrollbarLength: 100
				}
			};
		},
		methods: {
			sendMessage() {
				if (this.chatMessage) {
					this.chats.push({
						img: "/static/img/user-2.jpg",
						message: this.chatMessage,
						from: "Sally Drake",
						time: "Just Now",
						admin: true
					});
					this.chatMessage = "";
				}
			}
		}
	};
</script>