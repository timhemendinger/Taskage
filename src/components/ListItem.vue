<template>
	<transition name="bounce"><div class="task-wrapper">
	  <input class="task" rows="1" v-model="value"   @change="updateTask" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">
	    
	    <div class="task-control delete-task" @click="deleteTask"><span class="icon">
	  <i class="fa fa-trash-o" aria-hidden="true"></i>
	</span></div>
	    
	 <div class="task-control complete-task" @click="completeTask">
	<span class="icon"><i class="fa fa-check" aria-hidden="true"></i></span>
	</div>

	</div>
	</transition>
</template>

<script>
	export default {
		props: ['value', 'index'],
		methods: {
		    completeTask: function() {
		      this.$emit('task-completed', this.index);
		    },
		    deleteTask: function() {
		      this.$emit('task-deleted', this.index);
		    },
		    updateTask: function() {
		      this.$emit('input', this.value);
		      this.$emit('task-updated');
		    }
		  }
	}

</script>